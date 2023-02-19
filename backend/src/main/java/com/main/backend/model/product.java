package com.main.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class product {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private long CODE;
  private String NAME;
  private String IMG;
  private float PRICE;
  private float DISCOUNT;

  public long CODE() {
    return CODE;
  }

  public void setCODE(long CODE) {
    this.CODE = CODE;
  }

  public String NAME() {
    return NAME;
  }

  public void setNAME(String NAME) {
    this.NAME = NAME;
  }

  public String IMG() {
    return IMG;
  }

  public void setIMG(String IMG) {
    this.IMG = IMG;
  }

  public float PRICE() {
    return PRICE;
  }

  public void setPRICE(float PRICE) {
    this.PRICE = PRICE;
  }

  public float DISCOUNT() {
    return DISCOUNT;
  }

  public void setDISCOUNT(float DISCOUNT) {
    this.DISCOUNT = DISCOUNT;
  }
}
