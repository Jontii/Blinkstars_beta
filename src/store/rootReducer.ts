import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as campaignReducer } from 'src/slices/campaign';
import { reducer as chatReducer } from 'src/slices/chat';
import { reducer as kanbanReducer } from 'src/slices/kanban';
import { reducer as mailReducer } from 'src/slices/mail';
import { reducer as notificationReducer } from 'src/slices/notification';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  chat: chatReducer,
  form: formReducer,
  kanban: kanbanReducer,
  mail: mailReducer,
  notifications: notificationReducer,
  campaign: campaignReducer
});

export default rootReducer;
