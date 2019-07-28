import { user } from './user';
import { comment } from './comment';

export interface request {
  _id: string,
  title: string,
  message: string,
  priority: string,
  assignee: user,
  author: user,
  comments?: comment[]
  dateCreated?: Date,
  isCompleted?: boolean
}
