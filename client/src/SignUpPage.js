// src/Signup.js
import React, { useState } from "react";
import { register } from "./firebase";
import {
	Box,
	Button,
	Card,
	Flex,
	Heading,
	Link,
	Text,
	TextField,
} from "@radix-ui/themes";
import { Theme } from "@radix-ui/themes";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    console.log("email and password", email, password)
    e.preventDefault();
    try {
      await register(email, password);
      alert("Signed up!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    // <form onSubmit={handleSignup}>
    //   <h2>Sign Up</h2>
    //   <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //   <button type="submit">Sign Up</button>
    // </form>
    <Theme className="Auth">
    <Flex flexShrink="0" gap="6" direction="column" width="416px" >
	<Card size="5" style={{backgroundColor: "white", boxShadow: '0 10px 22px rgba(59, 77, 219, 0.17)'}}>
					<Heading as="h3" size="6" trim="start" mb="5">
						Sign Up
					</Heading>

					<Box mb="5">
						<Flex mb="1">
							<Text
								as="label"
								htmlFor="example-email-field"
								size="2"
								weight="bold"
							>
								Email address
							</Text>
						</Flex>
						<TextField.Root
							// tabIndex={tabIndex}
              value={email}
    onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							id="example-email-field"
						/>
					</Box>

					<Box mb="5" position="relative">
						<Flex align="baseline" justify="between" mb="1">
							<Text
								as="label"
								size="2"
								weight="bold"
								htmlFor="example-password-field"
							>
								Password
							</Text>
							<Link
								href="#"
								// tabIndex={tabIndex}
								size="2"
								onClick={(e) => e.preventDefault()}
							>
								Forgot password?
							</Link>
						</Flex>
						<TextField.Root
							// tabIndex={tabIndex}
							placeholder="Enter your password"
              value={password}
    onChange={(e) => setPassword(e.target.value)}
							id="example-password-field"
						/>
					</Box>

					<Flex mt="6" justify="end" gap="3">
						{/* <Button tabIndex={tabIndex} variant="outline"> */}
            {/* <Button variant="outline">
							Create an account
						</Button> */}
						{/* <Button tabIndex={tabIndex} onClick={{handleLogin}}>Sign in</Button> */}
            <Button className="auth-button" onClick={handleSignup}>Sign Up</Button>
					</Flex>
				</Card>
        </Flex>
        </Theme>
  );
}
