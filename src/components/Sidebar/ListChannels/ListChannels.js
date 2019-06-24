import React from 'react';
import { Modal, Input, Icon, Alert, List, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getUserName } from 'utils/SlackUtils';
import './ListChannels.css';

const ListChannels = ({
  user,
  room,
  text,
  onChange,
  joinableRooms,
  existingRooms,
  becomeRoomMember,
  gotoRoom,
  listChannelsModalVisible,
  hideListChannels,
  showAddChannel,
  fetchComplete,
  error
}) => {
  // Filter absed on search string
  if (text) {
    existingRooms = existingRooms.filter(each =>
      each.name.toUpperCase().startsWith(text.toUpperCase())
    );
    joinableRooms = joinableRooms.filter(each =>
      each.name.toUpperCase().startsWith(text.toUpperCase())
    );
  }

  const description = room => {
    const author =
      room.createdByUserId === user.id ? 'You' : getUserName(room, room.createdByUserId);
    return `Created by ${author} on ${moment(room.createdAt).format('MMM D, YYYY hh: mm A')}`;
  };

  return (
    <Modal
      title="Browse Channels"
      className="list-channels"
      visible={listChannelsModalVisible}
      onCancel={hideListChannels}
      style={{ top: '5%' }}
      destroyOnClose
    >
      {error ? (
        <>
          <Alert message={error} type="error" showIcon />
          &nbsp;
          <br />
          &nbsp;
        </>
      ) : (
        ''
      )}
      <Row>
        <Col span={17}>
          <Input
            value={text}
            placeholder="Search Channels"
            prefix={<Icon type="search" />}
            onChange={onChange}
          />
        </Col>
        <Col span={6} className="float-right">
          <Button
            type="primary"
            onClick={() => {
              hideListChannels();
              showAddChannel();
            }}
          >
            Create Channel
          </Button>
        </Col>
      </Row>

      <br />
      <div className="channels-list">
        <div className="chann-divider">
          Channels you can join
          {!fetchComplete ? (
            <span className="float-right">
              Updating list...
            </span>
          ) : null}
        </div>
        {joinableRooms ? (
          <List
            itemLayout="horizontal"
            dataSource={joinableRooms}
            renderItem={room => (
              <List.Item>
                <List.Item.Meta title={room.name} description={description(room)} />
                <span
                  onClick={() => {
                    becomeRoomMember(room);
                  }}
                >
                  <Button type="primary" size="small">
                    Join
                    {' '}
                    <Icon type="user-add" />
                  </Button>
                </span>
              </List.Item>
            )}
          />
        ) : null}
        <div className="chann-divider">Channels you belong to</div>
        <List
          itemLayout="horizontal"
          dataSource={existingRooms}
          renderItem={room => (
            <List.Item
              onClick={() => {
                hideListChannels();
                gotoRoom(room);
              }}
            >
              <List.Item.Meta title={room.name} description={description(room)} />
              <span>
                <Icon type="enter" />
              </span>
            </List.Item>
          )}
        />
        <br />
      </div>
    </Modal>
  );
};

ListChannels.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  existingRooms: PropTypes.array,
  joinableRooms: PropTypes.array,
  error: PropTypes.string
};

export default ListChannels;
