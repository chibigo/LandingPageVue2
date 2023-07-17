import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, startAfter, Timestamp, updateDoc, where } from "firebase/firestore";

import { database } from '../firebase/index';

// Add a new document in collection "cities"
export const setDocument = async (payload) => {
  await addDoc(collection(database, import.meta.env.VITE_PROJECT_ID), {
    ...payload,
    created: Timestamp.now()
  })
}

export const updateDocument = async (id, payload) => {
  const frankDocRef = doc(database, import.meta.env.VITE_PROJECT_ID, id);
  await updateDoc(frankDocRef, {
    ...payload,
  });
}


export const deleteDocument = async (id) => {
  await deleteDoc(doc(database, import.meta.env.VITE_PROJECT_ID, id));
}


export const getDocumentByType = async (collectionName, id) => {
  const citiesRef = collection(database, collectionName);
  const q = query(citiesRef, where("id", "==", id));
  const dataReturn = []
  await getDocs(q).then((data) => {
    data.docs.map((item) => {
      dataReturn.push({ ...item.data(), id: item.id })
    })
  });
  return dataReturn
}

export const getDocumentByTypeAndName = async (type = 'phaochi', name, collectionName='image_catalog') => {
  const citiesRef = collection(database, collectionName);
  let q;
  if (type == 'pvc') {
    q = query(citiesRef, where("type", "==", type))
  } else {
    q = query(citiesRef, where("name", "==", name), where("type", "==", type));
  }
  const dataReturn = []
  await getDocs(q).then((data) => {
    data.docs.map((item) => {
      dataReturn.push({ ...item.data(), id: item.id })
    })
  });
  return dataReturn
}

export const getDocument = async (collectionName) => {
  const q = query(collection(database, collectionName));

  // const dbInstance = collection(database, import.meta.env.VITE_PROJECT_ID, orderBy('created'));
  const dataReturn = []
  await getDocs(q).then((data) => {
    data.docs.map((item) => {
      dataReturn.push({ ...item.data(), id: item.id })
    })
  });
  // const postData = [];
  // snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
  return dataReturn
}

export const getDocumentLimit = async (collectionName, limitCount) => {
  const q = query(collection(database, collectionName),limit(Number(limitCount)))

  const dataReturn = []
  await getDocs(q).then((data) => {
    data.docs.map((item) => {
      dataReturn.push({ ...item.data(), id: item.id })
    })
  });
  return dataReturn
}

export const getDocumentLimitNext = async (limitCount) => {
  const q = query(collection(database, import.meta.env.VITE_PROJECT_ID), orderBy('created', 'desc'), limit(Number(limitCount)))

  const dataReturn = []
  let lastVisible
  await getDocs(q).then((data) => {
    data.docs.map((item) => {
      dataReturn.push({ ...item.data(), id: item.id })
    })
    lastVisible = data.docs[data.docs.length - 1];
  });

  // Get the last visible document


  // Construct a new query starting at this document,
  // get the next 25 cities.
  const next = query(collection(database, import.meta.env.VITE_PROJECT_ID),
    startAfter(lastVisible),
    limit(limitCount));
  return dataReturn
}

export const getDocumentID = async (collection, id) => {
  const docID = await id
  let docRef
  const postData = [];
  if (docID) {
    docRef = doc(database, collection, docID)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      postData.push(docSnap.data())
    } else {
      console.log("Document does not exist")
      return false
    }
  }
  // console.log(postData);
  return postData
}

export const searchByName = (keyWord) => {
  console.log(keyWord, 'keywourd');
  setTimeout(async () => {
    const q = query(collection(database, import.meta.env.VITE_PROJECT_ID), orderBy('title'), where('title', '==', keyWord));
    const querySnapshot = await getDocs(q).catch((e) => console.log(e, 'error'))
    console.log(querySnapshot, 'snapshot');
    if (!querySnapshot.length) {
      return
    }
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }, 2000);

}