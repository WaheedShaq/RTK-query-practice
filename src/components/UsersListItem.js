import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoadingDeleteUser, removeUserError] =
    useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button
        className='mr-3'
        loading={isLoadingDeleteUser}
        onClick={handleClick}
      >
        <GoTrashcan />
      </Button>
      {removeUserError && <div>Error deleting user</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>Content!!</ExpandablePanel>;
}

export default UsersListItem;
