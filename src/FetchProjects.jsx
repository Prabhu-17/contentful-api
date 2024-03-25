import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: '1vjgj53jy6ih',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

client
    .getEntries({content_type:'projects'})
    .then((response)=>console.log(response))

export const useFetchData=()=>{
  const [loading,setLoading]=useState(true)
  const [projects,setProjects]=useState([])

  const getData=async()=>{
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects=response.items.map((item)=>{
        const {url,title,image}=item.fields;
        const id=item.sys.id;
        const img=image?.fields?.file?.url;
        return {title,id,url,img}
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return {loading,projects}
}