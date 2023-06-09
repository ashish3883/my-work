import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getAllContacts } from "../../contactsInfo";

const waitFor2Sec = () => new Promise((resolve) =>{
    setTimeout(() => resolve(), 200);
})

export function rootAction(){
  console.log("Executed");
  return [
    {
      first:"Ashish",
      last:"Kumar",  
      id:1      
  },
  ]; 
}

export async function loader(){
    return getAllContacts();    
}

export default function Root() {
    const contacts = useLoaderData();
    console.log(contacts)
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
          {contacts && contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
        </div>
        <div id="detail">
            <Outlet/>
        </div>
      </>
    );
  }