import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import * as S from './styles';

interface TextareaState {
  name: string,
  label: string,
  placeholder: string,
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ name, label, placeholder, onChange, ...rest }: TextareaState) => {
	const textareaRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);
  
	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textareaRef,
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
		<div>
			<S.Label>{label}</S.Label>
			<S.Textarea
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				id={fieldName}
				ref={textareaRef}
				defaultValue={defaultValue}
				{...rest}
			/>
		</div>
	);
};

export default Textarea;

