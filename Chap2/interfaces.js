const godspower = {
    name: 'Godspower',
    id: 2,
    isManager: false,
    getUniqueID: () => {
        let uniqueId = godspower.id + ' ' + godspower.name;
        if (!godspower.isManager) {
            return 'emp-' + uniqueId;
        }
        return uniqueId;
    },
};
const mfoniso = {
    name: 'Mfoniso',
    id: 1,
    isManager: true,
    getUniqueID: () => {
        let uniqueId = mfoniso.id + ' ' + mfoniso.name;
        if (mfoniso.isManager) {
            return 'mgr-' + uniqueId;
        }
        return uniqueId;
    },
};
console.log(mfoniso.getUniqueID());
export {};
