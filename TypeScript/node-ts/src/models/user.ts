const addUserToDB = (userName: string, password: string, age: number) => {
  console.log(userName, password, age);

  return "user registration done";
};

// type lockedState = "locked" | "unlocked";

interface user {
  id: number;
  uname: string;
  password: string;
  age: number;
  is_active: true | false;
  accountStatus: string | number;
}

const updateUserData = (objUser: user): String => {
  console.log(objUser.uname);

  return "update done";
};

export { addUserToDB, updateUserData };
