import React from 'react';
import './select.scss';

interface IOption {
  value: string | number;
  name: string;
}

interface ISelectProps {
  options: IOption[];
  defaultValue: string | number;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
  defaultValue,
  options,
  className,
  ...rest
}: ISelectProps) => {
  return (
    <div className="flex">
      <select className={className} defaultValue={defaultValue} {...rest}>
        <option hidden value="">
          {defaultValue}
        </option>
        {options.map(({ value, name }, index) => (
          <option key={index} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
