import React from 'react'

const CodingProblem = () => {
  const [codeProbArr, setcodeProbArr] = useState(null);
  useEffect(() => {
    
  },[]);

  if(codeProbArr != null){
      codeProbArr.map(codeObj => {
        console.log("a single coding problem", codeObj)
      })
      return (
        <div>
        <h2>Got it!</h2>
        </div>
      )
  } else {
    return (
      <div>
      <h2>check</h2>
      </div>
    )
  }


}

export default CodingProblem