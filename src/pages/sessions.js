const sessions = {}

function getMaintenanceMode(session_id){
    if(session_id in sessions){
        return sessions[session_id]
    }else{
        return null
    }
}

function setMaintenanceMode(session_id, isMaintenance){
    sessions[session_id] = isMaintenance
}

export {
    getMaintenanceMode,
    setMaintenanceMode
}