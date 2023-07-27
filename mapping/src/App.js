import React, { useState } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { setRegionInfo, loadRegionInfo } from './redux/actions';
import OSMMap from './components/OSMMap';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import './App.css';
//import { loadRegionInfo } from './redux/actions';


const { Header, Sider, Content, Footer } = Layout;

const App = ({ regionInfo, setRegionInfo, loadRegionInfo }) => {
  const [selectedRegion, setSelectedRegion] = useState('India');

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };
  const handleLoadButtonClick = () => {
    if (selectedRegion === 'India') {
      loadRegionInfo(selectedRegion); // Call the specific handler for India region
    } else {
      loadRegionInfo(selectedRegion); // Default handler for other regions
    }
  };
 

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* ...Other parts of the layout remain unchanged... */}
      <Layout>
        <Sider className="sidebar">
          {/* ...Other parts of the sidebar remain unchanged... */}
          <FormInput
            selectedRegion={selectedRegion}
            onRegionChange={handleRegionChange}
            handleLoadButtonClick={handleLoadButtonClick} // Pass the correct function name
          />
        </Sider>
        <Content className="map-content">
          {/* Map Content */}
          <OSMMap selectedRegion={selectedRegion} />
          
        </Content>
      </Layout>
      <Sider width={300} theme="light" className="floating-controls" collapsible>
        {/* Floating Controls */}
        <RegionInfo regionInfo={regionInfo} />
      </Sider>
      {/* ...Footer content and other parts remain unchanged... */}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  regionInfo: state.regionInfo,
});

const mapDispatchToProps = {
  setRegionInfo,
  loadRegionInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
