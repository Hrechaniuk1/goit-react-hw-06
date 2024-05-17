import css from './App.module.css'
import SearchBox from './SearchBox/SearchBox'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
// ------


export default function App() {
    



    return (
        <div>
        <div className={css.main}>
            <h1>Phonebook</h1>
                <ContactForm/>
            <SearchBox/>
        </div>
            <ContactList/>
            
        </div>
    )
}