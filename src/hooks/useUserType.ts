
import { useState, useEffect } from 'react';

type UserType = 'client' | 'vendor' | null;

export function useUserType() {
  // For now, we'll use localStorage to determine the user type
  // In a real application, this would come from authentication
  const [userType, setUserType] = useState<UserType>(() => {
    const savedType = localStorage.getItem('userType');
    return (savedType as UserType) || 'client'; // Default to 'client'
  });

  const updateUserType = (type: UserType) => {
    setUserType(type);
    if (type) {
      localStorage.setItem('userType', type);
    } else {
      localStorage.removeItem('userType');
    }
  };

  return { userType, updateUserType };
}
