import './appList.scss'

export default function AppList({ id, title, active, setSelected }) {
    return (
        <li className={active ? 'appList active' : 'appList'}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
