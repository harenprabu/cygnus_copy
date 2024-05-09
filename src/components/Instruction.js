
'use client'
import { useState,useEffect } from 'react';
import supabase from'src/utils/supabase';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  const [selectedItem, setSelectedItem] = useState('');
  const [country, setCountry] = useState([]);
  useEffect(() => {
   

    
  const GetCountry = async () => {
  let{data, error} = await supabase 
                    .from('form _data')
                    .select('*,visa_tariff(id,country,visa_fee)')
                    .eq('id', '9c9724ee-fd6f-49ab-8260-fb9aa6073980')
                    .limit(1)
if (data){
    console.log("DATA:",data);
    console.log("VISA",data[0].visa_tariff.visa_fee);
}  
else{
    console.log("ERROR:",error);
}        
                  
               
  };
  if(activeTab =="tab2"){
  GetCountry()
  }
  }, [activeTab]);


  return (
    <div className="border border-gray-200 rounded-lg">
    
    </div>
  );
};

export default TabComponent;
