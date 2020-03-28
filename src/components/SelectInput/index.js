import React from 'react';
import Select from 'react-select';

export default function SelectInput({ options, valueSelected }) {
  return <Select options={options} onChange={value => valueSelected(value)} />;
}
