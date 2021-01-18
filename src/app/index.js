import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../service/fetchUsers";
import { fetchUserByUsername } from "../service/fetchOneUser";
import { clearUser } from "../store/user/user.action";
import { useDebounce } from "hooks/useDebounce";

import { List } from "components/List";
import { ListItem, ListInfo, ListAvatar } from "components/List/style";
import { Input } from "components/Input";
import { Button } from "components/Button";

import { Main } from "./style";

function App() {
  const [query, setQuery] = useState("");

  const { users, loading } = useSelector((state) => ({
    users: state.users.users,
    loading: state.users.loading,
  }));
  const { user, loading: userLoading } = useSelector((state) => ({
    user: state.user.user,
    loading: state.user.loading,
  }));

  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const clearInputSearch = useCallback(() => {
    dispatch(clearUser());
    setQuery("");
  }, [dispatch, setQuery]);

  const debouncedQuerySearch = useDebounce(query, 1000);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (debouncedQuerySearch) {
      dispatch(fetchUserByUsername(debouncedQuerySearch));
    }
  }, [debouncedQuerySearch, dispatch]);

  if (loading) {
    return <h1 data-testid="loading">Loading ...</h1>;
  }

  return (
    <Main>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Input onChange={handleChange} name="search" value={query} />
        <Button onClick={clearInputSearch}>Очистить</Button>
      </div>
      {Object.keys(user).length !== 0 && !user.constructor !== Object ? (
        <ListItem>
          <ListAvatar src={user.avatar_url} alt={user.login} />
          <ListInfo>
            <span>{user.login}</span>
          </ListInfo>
        </ListItem>
      ) : (
        <List users={users} />
      )}
    </Main>
  );
}

export default App;
