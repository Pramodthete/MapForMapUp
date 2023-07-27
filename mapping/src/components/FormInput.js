import React from 'react';
import { Select, Button } from 'antd';

const FormInput = ({ selectedRegion, onRegionChange, handleLoadButtonClick }) => { // Update prop name
  const { Option } = Select;

  return (
    <div className="form-input">
      <Select value={selectedRegion} style={{ width: 200 }} onChange={onRegionChange}>
        <Option value="India">India</Option>
        <Option value="UnitedStates">United States</Option>
        <Option value="UnitedKingdom">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadButtonClick}>
        Load
      </Button>
    </div>
  );
};

export default FormInput;
