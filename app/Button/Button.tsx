"use client";
import React, { FC } from "react";

interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	onClick: () => void;
  disabled?: boolean; // Optional, not every button needs to be disabled so we include disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, disabled }: ButtonProps) => {
	return (
		<button onClick={onClick} disabled={disabled} className={`${className} text-sm rounded-full w-20 h-8 bg-red-400`}>
			{children}
		</button>
	);
};

export default Button;
