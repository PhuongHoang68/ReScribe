// src/Login.js
import React, { useState } from "react";
import { login } from "./firebase";
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


export default function Login() {
	console.log("login page")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    console.log("hit")
    e.preventDefault();
    const rawEmail = email;
    const trimmed = rawEmail.trim();
    console.log("🔎 Raw email:", JSON.stringify(rawEmail));
    console.log("🔎 Trimmed email:", JSON.stringify(trimmed));
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed)) {
      return alert(`Email "${trimmed}" is not valid.`);
    }
    try {
      await login(trimmed, password);
    } catch (err) {
      console.error("⚠️ Firebase error code:", err.code);
      alert(err.message);
    }
  };

  return (
    // <form onSubmit={handleLogin}>
    //   <h2>Log In</h2>
    //   <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //   <button type="submit">Log In</button>
    // </form>
    <Theme className="Auth">
    <Flex flexShrink="0" gap="6" direction="column" width="416px">
				<Card size="4">
					<Heading as="h3" size="6" trim="start" mb="5">
						Log In
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
            <Button onClick={handleLogin}>Log In</Button>
					</Flex>
				</Card>
        </Flex>
        </Theme>
  );
}
