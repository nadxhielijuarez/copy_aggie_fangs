import React from 'react'

const CodingProblem = () => {
  const [codeProbArr, setcodeProbArr] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3002/tags',{
    method: "GET"
  }).then(response => {
    if (response.type === 'opaque' || response.ok) {
        response.json().then(codeProbsObjs => {
          setcodeProbArr(codeProbsObjs)
      });
    } 
  }).catch(error => {
    console.log("Error is: ", error)
  });
  },[]);
  if(codeProbArr != null){
    codeProbArr.map(codeObj => {
      console.log("a single coding problem")
    })
  }
  return (
    <div>
    <h2>Home</h2>
    </div>
  )
}

export default CodingProblem