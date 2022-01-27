import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import { useMessengerContext } from "../../contexts/messengerProvider";
import { useModal } from "../../contexts/modalProvider";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Activity } from "../../models/Activity";
import { equalDate } from "../../utils/equalDate";
import { DownloadButton } from "../Buttons/DownloadButton";
import { Mention } from "../Chat/ChatMessageContent";
import { Logo } from "../CommunityIdentity";
import { ContactMenu } from "../Form/ContactMenu";
import { Tooltip } from "../Form/Tooltip";
import { CheckIcon } from "../Icons/CheckIcon";
import { ClearSvg } from "../Icons/ClearIcon";
import { CommunityIcon } from "../Icons/CommunityIcon";
import { GroupIcon } from "../Icons/GroupIcon";
import { MoreIcon } from "../Icons/MoreIcon";
import { ReadMessageIcon } from "../Icons/ReadMessageIcon";
import { ReplyIcon } from "../Icons/ReplyActivityIcon";
import { UntrustworthIcon } from "../Icons/UntrustworthIcon";
import { UserIcon } from "../Icons/UserIcon";
import {
  ContentWrapper,
  DateSeparator,
  MessageHeaderWrapper,
  MessageOuterWrapper,
  MessageText,
  TimeWrapper,
  UserAddress,
  UserName,
  UserNameWrapper,
} from "../Messages/Styles";
import { ProfileModalName } from "../Modals/ProfileModal";
import { textMediumStyles, textSmallStyles } from "../Text";

import { ActivityBtn, FlexDiv } from "./ActivityCenter";

const today = new Date();

type ActivityMessageProps = {
  activity: Activity;
  setShowActivityCenter: (val: boolean) => void;
};

export function ActivityMessage({
  activity,
  setShowActivityCenter,
}: ActivityMessageProps) {
  const { contacts, setActiveChannel } = useMessengerContext();
  const { setModal } = useModal(ProfileModalName);
  const showChannel = () => {
    activity.channel && setActiveChannel(activity.channel),
      setShowActivityCenter(false);
  };

  const [showMenu, setShowMenu] = useState(false);

  const type = activity.type;

  const contact = useMemo(
    () => contacts[activity.user],
    [activity.user, contacts]
  );

  const [elements, setElements] = useState<
    (string | React.ReactElement | undefined)[]
  >([activity.message?.content]);

  useEffect(() => {
    if (activity.message) {
      const split = activity.message?.content.split(" ");
      const newSplit = split.flatMap((element, idx) => {
        if (element.startsWith("@")) {
          return [
            <Mention
              key={idx}
              id={element}
              setMentioned={() => true}
              className="activity"
            />,
            " ",
          ];
        }
        return [element, " "];
      });
      newSplit.pop();
      setElements(newSplit);
    }
  }, [activity.message?.content]);

  const ref = useRef(null);
  useClickOutside(ref, () => setShowMenu(false));

  return (
    <MessageOuterWrapper>
      <ActivityDate>
        {equalDate(activity.date, today)
          ? "Today"
          : activity.date.toLocaleDateString()}
      </ActivityDate>

      <MessageWrapper className={`${!activity.isRead && "unread"}`}>
        <>
          <UserIcon />
          <ActivityContent>
            <MessageHeaderWrapper>
              <UserNameWrapper>
                <ActivityUserName
                  onClick={() => {
                    setModal({
                      id: activity.user,
                      renamingState: false,
                      requestState: false,
                    });
                  }}
                >
                  {" "}
                  {contact?.customName ?? activity.user.slice(0, 10)}
                </ActivityUserName>
                {contact?.customName && (
                  <UserAddress>
                    {activity.user.slice(0, 5)}...{activity.user.slice(-3)}
                  </UserAddress>
                )}
                {contact.isUntrustworthy && <UntrustworthIcon />}
              </UserNameWrapper>
              <TimeWrapper>
                {activity.date.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </TimeWrapper>
            </MessageHeaderWrapper>
            {type === "request" && (
              <ContextHeading>
                Contact request
                {activity.requestType === "outcome"
                  ? ` to ${activity.user.slice(0, 10)}`
                  : ": "}
              </ContextHeading>
            )}
            {type === "invitation" && (
              <FlexDiv>
                <ContextHeading>{`Invited you to join a community `}</ContextHeading>
                <Tag>
                  <CommunityIcon width={17} height={16} />
                  <CommunityLogo
                    style={{
                      backgroundImage: activity.invitation?.icon
                        ? `url(${activity.invitation?.icon}`
                        : "",
                    }}
                  >
                    {activity.invitation?.icon === undefined &&
                      activity.invitation?.name.slice(0, 1).toUpperCase()}
                  </CommunityLogo>
                  <span>{activity.invitation?.name}</span>
                </Tag>
              </FlexDiv>
            )}
            <ActivityText>
              {activity.message?.content && (
                <div>{elements.map((el) => el)}</div>
              )}
              {activity.requestType === "income" && activity.request}
            </ActivityText>
            {type === "mention" &&
              activity.channel &&
              activity.channel.type !== "dm" && (
                <Tag onClick={showChannel}>
                  {activity.channel.type === "group" ? <GroupIcon /> : "#"}{" "}
                  <span>{` ${activity.channel.name.slice(0, 10)}`}</span>
                </Tag>
              )}
            {type === "reply" && activity.quote && (
              <ReplyWrapper>
                {activity.quote.image && (
                  <ContextHeading>Posted an image in</ContextHeading>
                )}
                <Tag onClick={showChannel}>
                  <ReplyIcon /> <span>{activity.quote.content}</span>
                </Tag>
              </ReplyWrapper>
            )}
            {type === "invitation" && (
              <InviteDiv>
                <ContextHeading>{`To access other communities, `}</ContextHeading>
                <DownloadButton className="activity" />
              </InviteDiv>
            )}
          </ActivityContent>
        </>
        {type === "request" &&
          !activity.status &&
          activity.requestType === "income" && (
            <>
              <ActivityBtn
                onClick={() => {
                  activity.isRead = true;
                  activity.status = "accepted";
                }}
                className="accept"
              >
                <CheckIcon width={20} height={20} className="accept" />
              </ActivityBtn>
              <ActivityBtn
                onClick={() => {
                  activity.isRead = true;
                  activity.status = "declined";
                }}
                className="decline"
              >
                <ClearSvg width={20} height={20} className="decline" />
              </ActivityBtn>
              <ActivityBtn
                onClick={() => {
                  setShowMenu((e) => !e);
                }}
                ref={ref}
              >
                {showMenu && (
                  <ContactMenu id={activity.user} setShowMenu={setShowMenu} />
                )}
                <MoreIcon />
              </ActivityBtn>
            </>
          )}
        {type === "request" && activity.status === "accepted" && (
          <RequestStatus className="accepted">Accepted</RequestStatus>
        )}
        {type === "request" && activity.status === "declined" && (
          <RequestStatus className="declined">Declined</RequestStatus>
        )}
        {type === "request" && activity.status === "sent" && (
          <RequestStatus>Sent</RequestStatus>
        )}
        {(type === "mention" || type === "reply") && (
          <BtnWrapper>
            <ActivityBtn
              onClick={() => {
                activity.isRead = true;
              }}
              className={`${activity.isRead && "read"}`}
            >
              <ReadMessageIcon isRead={activity.isRead} />
            </ActivityBtn>
            <Tooltip tip="Mark Read" className="read" />
          </BtnWrapper>
        )}
      </MessageWrapper>
    </MessageOuterWrapper>
  );
}

const InviteDiv = styled.div`
  display: flex;
  margin-top: -4px;
`;

const BtnWrapper = styled.div`
  position: relative;

  &:hover > div {
    visibility: visible;
  }
`;

const ActivityDate = styled(DateSeparator)`
  justify-content: flex-start;
  padding: 8px 16px;
  margin: 0;
`;

const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 8px 16px;

  &.unread {
    background: ${({ theme }) => theme.buttonBgHover};
  }
`;

const ActivityText = styled(MessageText)`
  white-space: unset;
  margin-bottom: 8px;
`;

const Tag = styled.div`
  width: fit-content;
  max-width: 200px;
  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 11px;
  padding: 0 6px;
  cursor: pointer;

  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
  ${textSmallStyles}

  & > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const ContextHeading = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.secondary};
  flex-shrink: 0;
  white-space: pre-wrap;
  ${textMediumStyles}
`;

const RequestStatus = styled.p`
  font-weight: 500;
  align-self: center;
  text-align: end;
  color: ${({ theme }) => theme.secondary};
  ${textSmallStyles}

  &.accepted {
    color: ${({ theme }) => theme.greenColor};
  }

  &.declined {
    color: ${({ theme }) => theme.redColor};
  }
`;

const ActivityContent = styled(ContentWrapper)`
  max-width: calc(100% - 80px);
  flex: 1;
`;

const ActivityUserName = styled(UserName)`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ReplyWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;

  & > p {
    margin-right: 4px;
  }
`;

const CommunityLogo = styled(Logo)`
  width: 16px;
  height: 16px;
  margin: 0 2px 0 4px;

  ${textSmallStyles}
`;
