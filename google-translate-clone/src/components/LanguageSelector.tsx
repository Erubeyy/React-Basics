import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPPORTED_LANUGAGES } from "../constants"
import { type FromLanguage, type Language } from "../types";

type Props =
  | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: 'to', value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, type, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  }

  return (
    <Form.Select aria-label="Select language" onChange={handleChange} value={value}>
      {type === 'from' && <option value={AUTO_LANGUAGE}>{AUTO_LANGUAGE}</option>}
      {Object.entries(SUPPORTED_LANUGAGES).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </Form.Select>
  )
}