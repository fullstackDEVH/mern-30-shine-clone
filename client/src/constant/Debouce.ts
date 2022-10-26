/*import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => clearTimeout(timeoutId);
    }, [value]);
  
    return debouncedValue;
  }
  
  export function Debounce() {
    const [value, setValue] = useState("");
    const [users, setUsers] = useState([]);
  
    const debouncedValue = useDebounce(value, 300);
  
    const searchUsers = async () => {
      const newUsersResponse = await axios.get(
        `https://dummyjson.com/users/search?q=${value}`
      );
  
      if (newUsersResponse && newUsersResponse.data)
        setUsers(newUsersResponse.data.users);
    };
  
    const handleSearchInputChange = (e) => {
      const value = e.target.value;
      setValue(value);
    };
  
    useEffect(() => {
      searchUsers("");
    }, []);
  
    // useEffect(() => {
    //   searchUsers(value);
    // }, [value]);
  
    useEffect(() => {
      console.log("Value: ", debouncedValue);
      searchUsers(value);
    }, [debouncedValue]);
  
    return (
      <div className="h-full flex flex-col w-full items-center p-12">
        <form className="flex justify-center w-1/2 mb-12">
          <input
            value={value}
            onChange={handleSearchInputChange}
          />
        </form>
        <h3 className="font-bold text-3xl">Found Users</h3>
         <div className="flex flex-wrap items-center justify-center w-full">
          {users.map((user, idx) => (
            <User key={user.id} user={user} />
          ))}
        </div> 
      </div>
    );
  }*/

  export {};