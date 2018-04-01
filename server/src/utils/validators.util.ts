export const ValidateUtils = {
    nameValidator: (name: string): boolean => {
        return /^[A-Za-z\d. _-]+$/.test(name);
    }
};