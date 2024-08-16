import { Form } from "react-bootstrap"

type Props = {
  autoFocus?: boolean
  placeholder: string
  loading?: boolean,
  value: string,
  onChange: (value: string) => void
}

export const TextArea = ({ loading, autoFocus, placeholder, value, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      placeholder={placeholder}
      autoFocus={autoFocus}
      style={{ height: '150px', resize: 'none' }}
      value={value}
      onAbort={handleChange}
    />
  )
}