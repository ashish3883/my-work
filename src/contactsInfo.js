const contactsBook = [
    {
        first:"Ashish",
        last:"Kumar",
        gMail:"ashishkumar3883@gmail.com",  
        id:1      
    },
    {
        first:"Amit",
        last:"Singh",
        gMail:"amitsingh3883@gmail.com",        
        id:2
    },
    {
      first:"Ritesh",
      last:"Sethi",
      gMail:"riteshsethi3883@gmail.com",        
      id:3
  },
];
export function getContactFromId(contactId){
    return contactsBook.find(({id}) => contactId == id)
}

export function getAllContacts(){
    return contactsBook;
}