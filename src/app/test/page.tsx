'use client';

import InputComponent from "@/components/input/input";

export default function Test() {
    return (
        <div>
            <InputComponent type="text" id="name" name="name" placeholder="name" value="" onChange={() => {}} />
        </div>
    );
}