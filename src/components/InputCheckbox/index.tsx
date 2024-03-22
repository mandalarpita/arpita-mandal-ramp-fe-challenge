import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      {/* Bug 2: Corrected toggle for checkbox */}
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className={classNames("RampInputCheckbox--input", {
          "RampInputCheckbox--input-checked": checked,
          "RampInputCheckbox--input-disabled": disabled,
        })}
        onChange={() => {
          onChange(!checked)
        }}
      />
    </div>
  )
}
