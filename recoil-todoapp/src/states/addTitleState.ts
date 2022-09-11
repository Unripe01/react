import {atom, selector} from 'recoil'
import { Task } from '../types/Task'

export const AddTitleState = atom<Array<Task>>(
  {
    key:"addTitleState",
    default:[]
  }
)

// selector で atom にアクセスする
export const addTitleStateLength = selector<number>({
  key:"addTitleStateLength",
  get:({get}) => {
    const addTitleNumber:Array<Task> = get(AddTitleState)
    return addTitleNumber?.length || 0
  }
})