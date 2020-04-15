import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdInsertPhoto } from 'react-icons/md';
import { Container } from './styles';

import api from '~/services/api';

export default function AvatarInput({ image, imageId }) {
  const { registerField } = useField('avatar');
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState();

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    if (image) {
      setPreview(image.url);
      setFile(imageId);
    }
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container htmlFor="avatar">
      {preview === null ? (
        <>
          <MdInsertPhoto size={40} color="dddddd" />
          <span>Adicionar foto</span>
        </>
      ) : (
          <img src={preview} alt="imagem do entregador" />
        )}
      <input
        type="file"
        id="avatar"
        accept="image/*"
        onChange={handleChange}
        data-file={file}
        ref={ref}
      />
    </Container>
  );
}
