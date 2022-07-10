interface Name {
  name: string;
  surname: string;
  patronymic: string;
  oguid?: string;
}

export const getNameInFormat = (user: Name) => {
  return `${user.surname} ${user.name[0]}. ${user.patronymic[0]}.`;
};
