friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }]


const whosOnline = (friends) => {
    let output1={
      online:[],
      offline: [],
      away:[]
    }
      let output2={
      offline: [],
      away:[]
    }
  for(let i=0;i<friends.length;i++){
    if(friends[i].status=='online' && friends[i].lastActivity<=10){
      output1.online.push(friends[i].username)
    }
    else if(friends[i].status=='online' && friends[i].lastActivity>10){
      output1.away.push(friends[i].username) && output2.away.push(friends[i].username)
    }
    else if(friends[i].status=='offline'){
      output1.offline.push(friends[i].username) && output2.offline.push(friends[i].username)
    }

  }
    if(output1.online.length===0 && output1.offline.length!==0 && output1.away.length!==0){
      return output2
    }
    else if(output1.online.length==0 && output1.offline.length==0 && output1.away.length==0){
        return {}
    }
    else{
      return output1
    }

  }
console.log(whosOnline(friends))
