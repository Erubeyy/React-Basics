import { useFilters } from '../../hooks/useFilters';
import './Footer.css'

const Footer = () => {
  const { filters } = useFilters();

  return (
    <footer className='footer' >
      <span>
        {
          JSON.stringify(filters, null, 2)
        }
      </span>
    </footer>
  )
}

export default Footer;