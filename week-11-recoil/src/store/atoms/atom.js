import { atom, selector } from "recoil"


export const messageCountAtom = atom({
    key: 'messageCountAtom',
    default : selector({
        key: 'messageCountSelector',
        get: async ({get})=>{
            await new Promise(r => setTimeout(r,5000))
            return 2
        }

    })
})

export const notificationCountAtom = atom({
    key: 'notificationCountAtom',
    default: 0
})

export const jobsCountAtom = atom({
    key: 'jobsCountAtom',
    default: 0
}) 

export const myNetworkCountAtom = atom({
    key: 'myNetworkCountAtom',
    default: 0
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get})=>{
        const messageCount = get(messageCountAtom)
        const notificationCount = get(notificationCountAtom)
        const jobsCount = get(jobsCountAtom)
        const myNetworkCount = get(myNetworkCountAtom)

        return messageCount+notificationCount+jobsCount+myNetworkCount
    }
}) 