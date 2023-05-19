import pickle

def model_prediction(songsearch):
    temp = song_features.copy()
    temp.reset_index(inplace=True)
    songsearch = 'Sex on Fire'
    songsearch = songsearch.lower()
    song_index = temp.index[temp['song_name'] ==songsearch].tolist()[0]
    print(song_index)

    #print(song_features.index[song_index])

    loaded_model = pickle.load(open('knnpickle_file', 'rb'))
    distances,indices = loaded_model.kneighbors(X = song_features.iloc[song_index,:].values.reshape(1,-1), n_neighbors=6)
    return "songs" #change this
