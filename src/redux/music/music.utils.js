export const convertFilesToMap = (filesSnapshot) => {
    const newFile = filesSnapshot.map(snapshots => {
        const file = {}
        snapshots.map(snapshot => {
          if (snapshot.metadata.contentType.includes('image')) {
            file.imageUrl = snapshot.url
            file.imageData = snapshot.metadata
          } else {
            file.fileUrl = snapshot.url
            file.fileMetadata = snapshot.metadata
          }
          return null
        })
        return file
    })
    return newFile
}

export const addFileToPlayList=(playlist, fileToAdd)=>{
  if (!playlist)return playlist=[{...fileToAdd}]
    const isExisting = playlist.find(
        file => file.name === fileToAdd.name
    );

    if(isExisting) return playlist
    return [...playlist,{...fileToAdd}]
}