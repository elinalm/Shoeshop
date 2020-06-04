import React, { useState } from "react";
import { Form, FormField, TextInput, Box, Button, Text } from "grommet";
import { UserConsumer } from "../../context/userContext";
import { Close } from "grommet-icons";
import { CollapsibleNav } from "../CollapsibleNav";


const Login = (props) => {
  const [value, setValue] = useState({ loggedinusername: "", password: "" });
  const [reveal, setReveal] = useState(false);


return (
  <UserConsumer>
    {(user) => (
      <Box pad="large">
        <Button justify='end' alignSelf='end' icon={<Close size='small' />}
          onClick={() => { props.setShowLogin(false) }}
        />
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onReset={() => setValue({})}
          onSubmit={async({ value }) => {
            let closeModal = await  user.loginUser(value)
            props.setShowLogin(!closeModal)
          }}

        
              >
              <FormField name="loggedinusername" label="Username">
                <TextInput name="loggedinusername" />
              </FormField>
              <FormField name="password" label="Password">
                <TextInput type={reveal ? "text" : "password"} name="password" />
              </FormField>
              <Box direction="row" gap="medium">
                <Button type="submit" primary label="Log In" />
                <Button type="reset" label="Reset" />
              </Box>

            {
              user.state.failedLogin && (
                <Box margin={{ top: "small" }} align="center">
                  <Text size="small" color="red" align="center">
                    Incorrect username or password.
                </Text>
                </Box>
              )
            }
      
            
          </Form>
      </Box>
    )}
  </UserConsumer>
);
};

export default Login;
