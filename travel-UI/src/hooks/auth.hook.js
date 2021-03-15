import {useState, useCallback, useEffect} from 'react'
const storageName = 'userData'
export const useAuth = () => {
const [token, setToken] = useState(null)
const [userId, setUserId] = useState(null)
const login = useCallback((jwtToken, id)=>{
setToken(jwtToken)
setUserId(id)
// console.log('inLogin => ',jwtToken, id);
localStorage.setItem(storageName, JSON.stringify({userId:id, token:jwtToken}))
},[])
const logout = useCallback(()=>{
  setToken(null)
  setUserId(null)
  localStorage.removeItem(storageName)
},[])
useEffect(() => {
  const data = localStorage.getItem(storageName)
  if (data) {
    const {userId, token} = JSON.parse(data)
    login(token, userId) 
  }
}, [login])
return {login, logout, token, userId}
}