// import React, { useState } from 'react'
// import useFirestore from '../hook/useFirestore'
// import { AuthContext } from './AuthProvider'

// export const AppContext = React.createContext()
// export default function AppProvider({ children }) {
//   const {
//     user: { uid },
//   } = React.useContext(AuthContext);
//   const [selectedRoomId, setSelectedRoomId] = useState('')
//   const [isAddRoomVisible, setIsAddRoomVisible] = useState(false)
//   const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
//   const roomsCondition = React.useMemo(() => {
//     return {
//       fieldName: 'members',
//       operator: 'array-contains',
//       compareValue: uid,
//     };
//   }, [uid]);

//   const rooms = useFirestore('rooms', roomsCondition);

//   const selectedRoom = React.useMemo(
//     () => rooms.find((room) => room.id === selectedRoomId) || {},
//     [rooms, selectedRoomId]
//   );

//   const usersCondition = React.useMemo(() => {
//     return {
//       fieldName: 'uid',
//       operator: 'in',
//       compareValue: selectedRoom.members,
//     };
//   }, [selectedRoom.members]);

//   const members = useFirestore('users', usersCondition);
//   const clearState = () => {
//     setSelectedRoomId('');
//     setIsAddRoomVisible(false);
//     setIsInviteMemberVisible(false);
//   };
//   return (
//     <AppContext.Provider value={{
//       members,
//       selectedRoom,
//       selectedRoomId,
//       setSelectedRoomId,
//       rooms,
//       isAddRoomVisible,
//       setIsAddRoomVisible,
//       isInviteMemberVisible, 
//       setIsInviteMemberVisible,
//       clearState
//     }}>
//       {children}
//     </AppContext.Provider>
//   )
// }
import React, { useState } from 'react';
import useFirestore from '../hook/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState('');

  const {
    user: { uid },
  } = React.useContext(AuthContext);

  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore('rooms', roomsCondition);

  const selectedRoom = React.useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );

  const usersCondition = React.useMemo(() => {
    return {
      fieldName: 'uid',
      operator: 'in',
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);

  const members = useFirestore('users', usersCondition);

  const clearState = () => {
    setSelectedRoomId('');
    setIsAddRoomVisible(false);
    setIsInviteMemberVisible(false);
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        selectedRoom,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        isInviteMemberVisible,
        setIsInviteMemberVisible,
        clearState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}