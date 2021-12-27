import React, { useEffect, useMemo, useState } from "react";
import { bufToHex } from "status-communities/dist/cjs/utils";
import styled from "styled-components";

import { useActivities } from "../../contexts/activityProvider";
import { useIdentity } from "../../contexts/identityProvider";
import { useModal } from "../../contexts/modalProvider";
import { useToasts } from "../../contexts/toastProvider";
import { useManageContact } from "../../hooks/useManageContact";
import { copy } from "../../utils";
import { buttonStyles } from "../Buttons/buttonStyle";
import { inputStyles, NameInput } from "../Form/inputStyles";
import { ClearSvg } from "../Icons/ClearIcon";
import { CopySvg } from "../Icons/CopyIcon";
import { EditSvg } from "../Icons/EditIcon";
import { LeftIconSvg } from "../Icons/LeftIcon";
import { UntrustworthIcon } from "../Icons/UntrustworthIcon";
import { UserIcon } from "../Icons/UserIcon";
import { textMediumStyles, textSmallStyles } from "../Text";

import { Modal } from "./Modal";
import {
  BackBtn,
  Btn,
  ButtonSection,
  Heading,
  Hint,
  Section,
} from "./ModalStyle";

export const ProfileModalName = "profileModal" as const;

export type ProfileModalProps = {
  id: string;
  image?: string;
  renamingState?: boolean;
  requestState?: boolean;
};

export const ProfileModal = () => {
  const { props } = useModal(ProfileModalName);
  const { id, image, renamingState, requestState } = useMemo(
    () => (props ? props : { id: "" }),
    [props]
  );

  const { setActivities } = useActivities();
  const { setToasts } = useToasts();
  const { setModal } = useModal(ProfileModalName);

  const identity = useIdentity();
  const isUser = useMemo(() => {
    if (identity) {
      return id === bufToHex(identity.publicKey);
    } else {
      return false;
    }
  }, [id, identity]);

  const [renaming, setRenaming] = useState(renamingState ?? false);

  useEffect(() => {
    setRenaming(renamingState ?? false);
  }, [renamingState]);

  const [request, setRequest] = useState("");
  const [requestCreation, setRequestCreation] = useState(requestState ?? false);

  useEffect(() => {
    setRequestCreation(requestState ?? false);
  }, [requestState]);

  const {
    contact,
    setBlocked,
    setCustomName,
    setIsUntrustworthy,
    setIsUserFriend,
  } = useManageContact(id);
  const [customNameInput, setCustomNameInput] = useState("");

  if (!contact) return null;
  return (
    <Modal
      name={ProfileModalName}
      className={`${!requestCreation && "profile"}`}
    >
      <Section>
        <Heading>{contact.trueName}’s Profile</Heading>
      </Section>

      <ProfileSection>
        <NameSection className={`${requestCreation && "small"}`}>
          {image ? (
            <ProfileIcon
              style={{
                backgroundImage: `url(${image}`,
              }}
              className={`${requestCreation && "small"}`}
            />
          ) : (
            <UserIcon modalView={!requestCreation} />
          )}
          <UserNameWrapper>
            <UserName className={`${requestCreation && "small"}`}>
              {contact?.customName ?? contact.trueName}
            </UserName>
            {contact.isUntrustworthy && <UntrustworthIcon />}
            {!renaming && (
              <button onClick={() => setRenaming(true)}>
                {" "}
                {!requestCreation && <EditSvg width={24} height={24} />}
              </button>
            )}
          </UserNameWrapper>
          {contact?.customName && (
            <UserTrueName>{contact.trueName}</UserTrueName>
          )}
        </NameSection>
        {renaming ? (
          <NameInputWrapper>
            <NameInput
              placeholder="Only you will see this nickname"
              value={customNameInput}
              onChange={(e) => setCustomNameInput(e.currentTarget.value)}
            />
            {contact.customName && (
              <ClearBtn
                onClick={() => {
                  setCustomName(undefined);
                  setCustomNameInput("");
                }}
              >
                <ClearSvg width={16} height={16} className="profile" />
              </ClearBtn>
            )}
          </NameInputWrapper>
        ) : (
          <>
            <UserAddressWrapper className={`${requestCreation && "small"}`}>
              {requestCreation ? (
                <UserAddress>
                  {id.slice(0, 10)}...{id.slice(-3)}
                </UserAddress>
              ) : (
                <>
                  <UserAddress className={`${requestCreation && "small"}`}>
                    Chatkey: {id.slice(0, 30)}
                  </UserAddress>

                  <CopyButton onClick={() => copy(id)}>
                    <CopySvg width={24} height={24} />
                  </CopyButton>
                </>
              )}
            </UserAddressWrapper>
            <EmojiKey className={`${requestCreation && "small"}`}>
              🎩🍞🥑🦍🌈📡💅🏻♣️🔔⛸👵🅱
            </EmojiKey>{" "}
          </>
        )}
        {requestCreation && (
          <RequestSection>
            <Hint>{request.length}/280</Hint>
            <RequestInput
              value={request}
              placeholder="Say who you are / why you want to became a contact..."
              maxLength={280}
              onInput={(e) => setRequest(e.currentTarget.value)}
              required
              autoFocus
            />
          </RequestSection>
        )}
      </ProfileSection>
      <ButtonSection>
        {renaming ? (
          <>
            <BackBtn onClick={() => setRenaming(false)}>
              <LeftIconSvg width={28} height={28} />
            </BackBtn>
            <Btn
              disabled={!customNameInput}
              onClick={() => {
                setCustomName(customNameInput);
                setRenaming(false);
              }}
            >
              Apply nickname
            </Btn>
          </>
        ) : requestCreation ? (
          <>
            <BackBtn onClick={() => setRequestCreation(false)}>
              <LeftIconSvg width={28} height={28} />
            </BackBtn>
            <Btn
              disabled={!request}
              onClick={() => {
                setActivities((prev) => [
                  ...prev,
                  {
                    id: id + request,
                    type: "request",
                    isRead: true,
                    date: new Date(),
                    user: id,
                    request: request,
                    requestType: "outcome",
                    status: "sent",
                  },
                ]),
                  setToasts((prev) => [
                    ...prev,
                    {
                      id: id + request,
                      type: "request",
                    },
                  ]),
                  setRequestCreation(false),
                  setModal(false),
                  setRequest("");
              }}
            >
              Send Contact Request
            </Btn>
          </>
        ) : (
          <>
            {!contact.isFriend && !isUser && (
              <ProfileBtn
                className={contact.blocked ? "" : "red"}
                onClick={() => {
                  setBlocked(!contact.blocked);
                }}
              >
                {contact.blocked ? "Unblock" : "Block"}
              </ProfileBtn>
            )}
            {contact.isFriend && (
              <ProfileBtn
                className="red"
                onClick={() => setIsUserFriend(false)}
              >
                Remove Contact
              </ProfileBtn>
            )}
            <ProfileBtn
              className={contact.isUntrustworthy ? "" : "red"}
              onClick={() => setIsUntrustworthy(!contact.isUntrustworthy)}
            >
              {contact.isUntrustworthy
                ? "Remove Untrustworthy Mark"
                : "Mark as Untrustworthy"}
            </ProfileBtn>
            {!contact.isFriend && (
              <Btn onClick={() => setRequestCreation(true)}>
                Send Contact Request
              </Btn>
            )}
          </>
        )}
      </ButtonSection>
    </Modal>
  );
};

const ProfileSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  &.small {
    margin-bottom: 0;
  }
`;

const ProfileIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 50%;
  background-color: #bcbdff;
  background-size: contain;
  background-position: center;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;

  &.small {
    width: 64px;
    height: 64px;
  }
`;

const UserNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;

  & > svg {
    fill: ${({ theme }) => theme.tertiary};
  }
`;

const UserName = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.2px;
  margin-right: 8px;

  &.small {
    font-size: 17px;
    line-height: 24px;
    margin-right: 0;
  }
`;

const UserTrueName = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  margin-top: 8px;
`;

const UserAddressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  &.small {
    margin-bottom: 8px;
  }
`;

export const UserAddress = styled.p`
  display: flex;
  letter-spacing: 1px;
  margin-right: 8px;
  color: ${({ theme }) => theme.secondary};

  ${textMediumStyles}

  &.small {
    margin-right: 0;

    ${textSmallStyles}
  }
`;
export const EmojiKey = styled.div`
  width: 116px;
  gap: 8px;
  font-size: 15px;
  line-height: 14px;
  letter-spacing: 0.2px;

  &.small {
    ${textSmallStyles}
  }
`;

const ProfileBtn = styled.button`
  padding: 11px 24px;
  ${buttonStyles}
  background: ${({ theme }) => theme.bodyBackgroundColor};
  border: 1px solid ${({ theme }) => theme.border};
  margin-left: 8px;

  &.red {
    color: ${({ theme }) => theme.redColor};
  }

  &.red:hover {
    background: ${({ theme }) => theme.buttonNoBgHover};
  }
`;

const CopyButton = styled.button`
  & > svg {
    fill: ${({ theme }) => theme.tertiary};
  }
`;

const ClearBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;

  & > svg {
    fill: ${({ theme }) => theme.secondary};
  }
`;

const NameInputWrapper = styled.div`
  position: relative;
`;

const RequestSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 16px 0;
`;

const RequestInput = styled.textarea`
  width: 100%;
  height: 152px;
  padding: 10px 16px;
  resize: none;
  margin-top: 16px;
  font-family: "Inter";

  ${inputStyles}
`;
