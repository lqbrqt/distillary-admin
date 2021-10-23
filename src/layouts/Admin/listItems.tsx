import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import SettingsIcon from '@material-ui/icons/Settings';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import { useRouter } from 'next/router';

export const MainListItems: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <ListItem button onClick={() => router.push('/admin')}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/User')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Test')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Test" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Question')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Question" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Answer')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Answer" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/CompleteTest')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Completed tests" />
      </ListItem>
      
    </div>
  );
};
