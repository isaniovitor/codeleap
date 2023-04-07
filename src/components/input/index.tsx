import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import * as S from './styles';

interface InputState {
  name: string,
  label: string,
  placeholder: string,
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, label, placeholder, onChange, ...rest }: InputState) => {
	const inputRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);
  
	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef,
			getValue: ref => {
				return ref.current.value;
			},
			setValue: (ref, value) => {
				ref.current.value = value;
			},
			clearValue: ref => {
				ref.current.value = '';
			},
		});
	}, [fieldName, registerField]);

	return (
		<S.Container>
			<S.Label>{label}</S.Label>
			<S.Input
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				id={fieldName}
				ref={inputRef}
				defaultValue={defaultValue}
				type='textarea'
				{...rest}
			/>
		</S.Container>
	);
};

export default Input;

