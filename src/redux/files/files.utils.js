export const deleteFileFromFileList=(fileList, fileToDelete)=>{
    const isExisting = fileList.find(
        file => file.fileMetadata.name === fileToDelete.fileMetadata.name
    );

    if(isExisting){ 
        return fileList.filter(
            file => file.fileMetadata.name !== fileToDelete.fileMetadata.name
        )
    }
    return fileList
}

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
