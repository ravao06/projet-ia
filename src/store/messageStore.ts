import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useMessageStore = create(
  combine({ message: null as string | null }, set => ({
    setMessage : (newMessage :string )=>set({message:newMessage}) ,
    clearMessage : () => set({message:null}),
  }))
   
)
