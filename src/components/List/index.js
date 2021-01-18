import { List as UlList, ListItem, ListAvatar, ListInfo } from "./style";

export const List = ({ users }) => {
  return (
    <UlList>
      {users.map(({ id, avatar_url, login }) => (
        <ListItem data-testid="item" key={id}>
          <ListAvatar src={avatar_url} alt={login} />
          <ListInfo>
            <span>{login}</span>
          </ListInfo>
        </ListItem>
      ))}
    </UlList>
  );
};
