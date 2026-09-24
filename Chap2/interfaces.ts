interface Student {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueID: () => string;
}

const godspower: Student = {
  name: 'Godspower',
  id: 2,
  isManager: false,
  getUniqueID: (): string => {
    let uniqueId = godspower.id + ' ' + godspower.name;

    if (!godspower.isManager) {
      return 'emp-' + uniqueId;
    }
    return uniqueId;
  },
};
const mfoniso: Student = {
  name: 'Mfoniso',
  id: 1,
  isManager: true,
  getUniqueID: (): string => {
    let uniqueId = mfoniso.id + ' ' + mfoniso.name;

    if (mfoniso.isManager) {
      return 'mgr-' + uniqueId;
    }
    return uniqueId;
  },
};

console.log(mfoniso.getUniqueID());
