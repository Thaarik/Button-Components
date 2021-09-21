import React from "react";
import Button from "./../Button/Button";

function ButtonComponents() {
  return (
    <div className="Container">
      <p>Button</p>
      <div className="row">
        <div>
          <code>{"<button />"}</code>
          <Button />
        </div>
      </div>

      <div className="row">
        <div>
          <code>{'<button variant="outline"/>'}</code>
          <Button variant="outline" />
        </div>
      </div>
      <div className="row">
        <div>
          <code>{'<button variant="text"/>'}</code>
          <Button variant="text" />
        </div>
      </div>

      <div className="row">
        <div>
          <code>{"<button disableShadow/>"}</code>
          <Button disableShadow />
        </div>
      </div>
      <div className="row">
        <div>
          <code>{"<button disabled/>"}</code>
          <Button disabled />
        </div>
        <div>
          <code>{'<button variant="text" disabled/>'}</code>
          <Button variant="text" disabled />
        </div>
      </div>

      <div className="row">
        <div>
          <code>{'<button startIcon="local_grocery_store"/>'}</code>
          <Button startIcon="local_grocery_store" />
        </div>
        <div>
          <code>{'<button  endIcon="local_grocery_store"/> '}</code>
          <Button endIcon="local_grocery_store" />
        </div>
      </div>

      <div className="row">
        <div>
          <code>{'<button size="sm" />'}</code>
          <Button size="sm" />
        </div>
        <div>
          <code>{'<button size="md" />'}</code>
          <Button size="md" />
        </div>
        <div>
          <code>{'<button size="lg" />'}</code>
          <Button size="lg" />
        </div>
      </div>

      <div className="row">
        <div>
          <code>{'<button color="default"/>'}</code>
          <Button color="default" />
        </div>
        <div>
          <code>{'<button color="primary" />'}</code>
          <Button color="primary" />
        </div>
        <div>
          <code>{'<button color="secondary" />'}</code>
          <Button color="secondary" />
        </div>
        <div>
          <code>{'<button color="danger" />'}</code>
          <Button color="danger" />
        </div>
      </div>
    </div>
  );
}

export default ButtonComponents;
