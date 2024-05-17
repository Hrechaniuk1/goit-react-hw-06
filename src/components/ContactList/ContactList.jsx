import { useSelector } from "react-redux"

import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { getContacts } from "../../redux/selectors"


export default function ContactList() {

    const items = useSelector(getContacts)

    return (
        <ul className={css.list}>
            {items.map(elem => {
                return <li className={css.listItem} key={elem.id}>
                    <Contact userName={elem.item.name} userNumber={elem.item.number} id={elem.id}></Contact>
                </li>
                
            })}
        </ul>
    )
}